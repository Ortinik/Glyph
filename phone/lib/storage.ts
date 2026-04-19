import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  VAULTS: 'glyph:vaults',
  ACTIVE_VAULT: 'glyph:activeVault',
  SETTINGS: 'glyph:settings',
  SETUP_COMPLETE: 'glyph:setupComplete',
  WORKSPACE: (vaultId: string) => `glyph:workspace:${vaultId}`,
  GITHUB_TOKEN: (vaultId: string) => `glyph:ghToken:${vaultId}`,
};

export async function getItem<T>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export async function removeItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

export { KEYS };
