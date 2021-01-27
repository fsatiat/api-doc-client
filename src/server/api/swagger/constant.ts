import { ApiResponseOptions, getSchemaPath } from "@nestjs/swagger";
import { ErrorDTO } from "../core/error/error.dto";

export enum Status {
  all = 'all',
  disable = 'disable',
  enable = 'enable'
}

export function buildError(examples: any) {
  return {
    content: {
      'application/json': {
        schema: {
          $ref: getSchemaPath(ErrorDTO)
        },
        examples: examples
      }
    }
  }
}

export const NOT_AUTHENTICATED = {
  "NOT_AUTHENTICATED": {
    summary: "Authentication",
    value: {
      statusCode: 401,
      code: 'NOT_AUTHENTICATED',
      detail: 'The api key is not valid'
    }
  }
}

export const NOT_FOUND = {
  "NOT_FOUND": {
    summary: "Not found",
    value: {
      statusCode: 404,
      code: 'NOT_FOUND',
      detail: 'Customer account : {id} not found'
    }
  }
}

export const UPDATE_FAILURE = {
  "UPDATE_FAILURE": {
    summary: "Update failure",
    value: {
      statusCode: 500,
      code: 'UPDATE_FAILURE',
      detail: 'Customer account {id} update failed'
    }
  }
}

export const INSERT_FAILURE = {
  "INSERT_FAILURE": {
    summary: "Insert failure",
    value: {
      statusCode: 500,
      code: 'INSERT_FAILURE',
      detail: 'Internal server error'
    }
  }
}

export const REQUEST_FAILED = {
  "REQUEST_FAILED": {
    summary: "Request failure",
    value: {
      statusCode: 500,
      code: 'REQUEST_FAILED',
      detail: 'Internal server error'
    }
  }
}

export const INVALID_PARAMETER = {
  "INVALID_PARAMETER": {
    summary: "Invalid parameter",
    value: {
      statusCode: 400,
      code: 'INVALID_PARAMETER',
      detail: 'Invalid parameter : {var} = {value}'
    }
  }
}

export const EMAIL_ALREADY_EXIST = {
  "EMAIL_ALREADY_EXIST": {
    summary: "Existing email",
    value: {
      statusCode: 400,
      code: 'EMAIL_ALREADY_EXIST',
      detail: 'Email already in use'
    }
  }
}

export const BADGE_ALREADY_EXIST = {
  "BADGE_ALREADY_EXIST": {
    summary: "Existing badge",
    value: {
      statusCode: 400,
      code: 'BADGE_ALREADY_EXIST',
      detail: 'Badge number already in use'
    }
  }
}

export const MATRICULE_ALREADY_EXIST = {
  "MATRICULE_ALREADY_EXIST": {
    summary: "Existing matricule",
    value: {
      statusCode: 400,
      code: 'MATRICULE_ALREADY_EXIST',
      detail: 'Matricule already in use'
    }
  }
}

export const FORBIDDEN = {
  "FORBIDDEN": {
    summary: "Forbidden",
    value: {
      statusCode: 403,
      code: 'FORBIDDEN',
      detail: 'You do not have access to customer {id}'
    }
  }
}

export const ID_ALREADY_EXIST = {
  "ID_ALREADY_EXIST": {
    summary: "Existing id",
    value: {
      statusCode: 400,
      code: 'ID_ALREADY_EXIST',
      detail: 'ID already in use'
    }
  }
}

export const USER_DISABLE = {
  "USER_DISABLE": {
    summary: "Disabled user",
    value: {
      statusCode: 400,
      code: 'USER_DISABLE',
      detail: 'You can\'t update disable account'
    }
  }
}