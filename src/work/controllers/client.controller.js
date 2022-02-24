import ClientService from "../services/client.service.js";

const createClient = async (req, res, next) => {
  try {
    let client = req.body;
    if (
      !client.nome ||
      !client.cpf ||
      !client.telefone ||
      !client.email ||
      !client.endereco
    ) {
      throw new Error(
        "Nome, CPF, Telefone, Email e Endereço são obrigatórios."
      );
    }
    client = await ClientService.createClient(client);
    res.send(client);
  } catch (err) {
    next(err);
  }
};

const showClients = async (req, res, next) => {
  try {
    res.send(await ClientService.showClients());
  } catch (err) {
    next(err);
  }
};

const showClient = async (req, res, next) => {
  try {
    res.send(await ClientService.showClient(req.params.id));
  } catch (err) {
    next(err);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    await ClientService.deleteClient(req.params.id);
    res.send(`Cliente do ID: ${req.params.id} DELETADO`);
    res.end();
  } catch (err) {
    next(err);
  }
};

const updateClient = async (req, res, next) => {
  try {
    let client = req.body;
    if (
      !client.cliente_id ||
      !client.nome ||
      !client.cpf ||
      !client.telefone ||
      !client.email ||
      !client.endereco
    ) {
      throw new Error(
        "Client ID, Nome, CPF, Telefone, Email e Endereço são obrigatórios."
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
  } catch (err) {
    next(err);
  }
};

export default {
  createClient,
  showClients,
  showClient,
  deleteClient,
  updateClient,
};
