import type { LaunchableApp } from '../models/LaunchableApp';

export interface AppRepository {
    getApps(): LaunchableApp[];
}