export interface Person {
  name: string;
  address: Address;
  telephone: string;
  nic: string;
}

export interface Address {
  city: string;
}

export interface Paddy {
  address: Address;
  name: string;
  nameOfTheAria: string;
  owner: {
    id: string,
    andGoviyeki: boolean
  }; // or ObjectId
  wapasariya: {
    akkara:
  };
  yalaWeda: boolean,
  mahaWeda: boolean,
  otherWiseHowWorks: string,
  state: string,
  district: string,
  city: string,
  vilage: string,
  gramsewaKottasaya: string,
  gramasewaAddress: Address;
  telephone: string
}