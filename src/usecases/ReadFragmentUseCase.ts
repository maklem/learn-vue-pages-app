
export class ReadFragmentUseCase {    
  static getConfig(name: string): string|null {
    let fragment = window.location.hash
    let entries: Record<string,string> = fragment.substring(1)
        .split("&")
        .map((item) => item.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: decodeURIComponent(value) }), {});
    if(name in entries) {
        return entries[name];
    }
    return null;
  }
}