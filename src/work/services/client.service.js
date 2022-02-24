import ClientRepository from "../repositories/client.repository.js";

const createClient = async (client) => {
  return await ClientRepository.createClient(client);
};

const showClients = async () => {
  return await ClientRepository.showClients();
};

const showClient = async (id) => {
  return await ClientRepository.showClient(id);
};

const deleteClient = async (id) => {
  await ClientRepository.deleteClient(id);
};

const updateClient = async (client) => {
  return await ClientRepository.updateClient(client);
};
export default {
  createClient,
  showClients,
  showClient,
  deleteClient,
  updateClient,
};
