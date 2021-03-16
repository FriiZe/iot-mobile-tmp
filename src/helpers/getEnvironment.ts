interface Environment {
  apiEndpoint: string;
  hideLogBox: boolean
}

const devEnvironment: Environment = {
  apiEndpoint: 'http://localhost:3000',
  hideLogBox: false,
};

const prodEnvironment: Environment = {
  apiEndpoint: 'http://localhost:3000',
  hideLogBox: false,
};

const getEnvironment = (): Environment => (__DEV__ ? devEnvironment : prodEnvironment);

export default getEnvironment;