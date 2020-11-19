import * as core from '@actions/core';

function isJsonArray(token: string): boolean {
  core.debug(`Your token is ${token}`);
  try {
    if (Array.isArray(JSON.parse(token))) {
      core.debug('Is JSON arrray');
      return true;
    }
  } catch (err) {
    core.debug(`Isn't JSON array: ${err}`);
    return false;
  }
  core.debug('Is JSON but not array');
  return false;
}

export function parseRegex(token: string): RegExp {
  if (isJsonArray(token)) {
    return new RegExp(`(${JSON.parse(token).join(')|(')})`);
  } else {
    return new RegExp(token);
  }
}
