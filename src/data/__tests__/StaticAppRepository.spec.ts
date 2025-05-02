import { describe, it, expect } from 'vitest'

import { StaticAppRepository } from '../StaticAppRepository.ts'

describe('StaticAppRepository', () => {
  it('contains some entries', () => {
    const repo = new StaticAppRepository()
    const apps = repo.getApps()
    expect(apps.length).toBeGreaterThan(0)
  })
})
