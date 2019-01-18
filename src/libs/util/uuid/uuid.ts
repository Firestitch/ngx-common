import { guid } from '../guid';

export function uuid(): string {
  return guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
}

