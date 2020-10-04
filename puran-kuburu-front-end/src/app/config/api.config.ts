export const BASE = 'http://localhost:8080';
export const FARMER_CONTROLLER = `${BASE}/api/v1/farmers`;
export const PADDY_FIELD_CONTROLLER = `${BASE}/api/v1/paddy-fields`;

export const API = {
  farmers: {
    create: `${FARMER_CONTROLLER}`,
    getAll: `${FARMER_CONTROLLER}`,
  },
  paddyField: {
    create: `${PADDY_FIELD_CONTROLLER}`,
    getAll: `${PADDY_FIELD_CONTROLLER}`
  }
};
