export const APP_NAME = 'SmartRent';

export const ROLES = {
  TENANT: 'tenant',
  LANDLORD: 'landlord',
  ADMIN: 'admin',
} as const;

export const ROOM_STATUS = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  MAINTENANCE: 'maintenance',
} as const;

export const LOCAL_STORAGE_KEYS = {
  USER: 'smartrent_user',
  TOKEN: 'smartrent_token',
  THEME: 'smartrent_theme',
} as const;

export const DATE_FORMATS = {
  DEFAULT: 'DD/MM/YYYY',
  WITH_TIME: 'DD/MM/YYYY HH:mm',
} as const;
