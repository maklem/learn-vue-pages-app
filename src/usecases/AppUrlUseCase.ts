import type { LaunchableApp } from '@/models/LaunchableApp.ts';

export class AppUrlUseCase {
  static getAppUrl(app: LaunchableApp, hostname: string, port: string): string {
    const url = app.argumentPattern
      .replace("{hostname}", hostname)
      .replace("{port}", port);
    return `steam://run/${app.steamAppId}//${url}/`;
  }
}