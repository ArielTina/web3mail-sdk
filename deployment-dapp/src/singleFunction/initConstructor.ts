import { IExec, utils } from "iexec";
import { HOST, HOST_SMS_DEBUG } from "../config/config.js";

export const initIexecConstructorDev = async (
  privateKey: string
): Promise<IExec> => {
  const ethProvider = utils.getSignerFromPrivateKey(HOST, privateKey);
  const iexec = new IExec(
    {
      ethProvider,
    },
    {
      smsURL: {
        scone: HOST_SMS_DEBUG,
        gramine: HOST_SMS_DEBUG,
      },
    }
  );
  return iexec;
};

export const initIexecConstructorProd = async (
  privateKey: string
): Promise<IExec> => {
  const ethProvider = utils.getSignerFromPrivateKey(HOST, privateKey);
  const iexec = new IExec({
    ethProvider,
  });
  return iexec;
};