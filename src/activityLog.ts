import * as yaml from "js-yaml";
import * as os from "os";
import * as path from "path";
import OutputFile from "./outputFile";

export default class ActivityLog {
  private outputFile = new OutputFile(
    "ActivityLog.yaml",
    path.join(os.tmpdir(), "VSLiveShareActivityLogs")
  );

  public async openAsync(): Promise<void> {
    await this.outputFile.openAsync();
    this.outputFile.append(`activities:${os.EOL}`);
  }

  public log(entry: any): void {
    this.outputFile.append(
      `${yaml.safeDump([entry], { skipInvalid: true })}${os.EOL}`
    );
  }
}
