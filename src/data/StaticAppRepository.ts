import type { LaunchableApp } from "@/models/LaunchableApp";
import type { AppRepository } from "@/data/AppRepository";

export class StaticAppRepository implements AppRepository{
    private apps: LaunchableApp[] = [];

    public constructor() {
        this.apps = [
            {
                name: "Project Zomboid",
                steamAppId: "108600",
                argumentPattern: "+connect {hostname}:{port}",
            },
            {
                name: "Left 4 Dead 2",
                steamAppId: "550",
                argumentPattern: "+connect {hostname}:{port}",
            },
        ];
    }

    public getApps(): LaunchableApp[] {
        return this.apps;
    }
}