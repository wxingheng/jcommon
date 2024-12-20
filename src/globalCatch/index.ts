/*
 * @Author: wxingheng
 * @Date: 2024-12-19 17:55:54
 * @LastEditTime: 2024-12-19 18:11:00
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /jcommon/src/globalCatch/index.ts
 */
class GlobalCache {
	private static readonly instance: GlobalCache = new GlobalCache()

	private readonly cache: Map<string, unknown>

	private constructor() {
		this.cache = new Map()
	}

	public static getInstance(): GlobalCache {
		return GlobalCache.instance
	}

	public set<T>(key: string, value: T): void {
		this.cache.set(key, value)
	}

	public get<T>(key: string): T | undefined {
		return this.cache.get(key) as T | undefined
	}

	public has(key: string): boolean {
		return this.cache.has(key)
	}

	public delete(key: string): void {
		this.cache.delete(key)
	}

	public clear(): void {
		this.cache.clear()
	}
}

const globalCache = GlobalCache.getInstance()
Object.freeze(globalCache)

export { globalCache }