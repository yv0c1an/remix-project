import { ethers } from "ethers";
import { SignerWithAddress } from './signer';
declare const getContractFactory: (contractNameOrABI: ethers.ContractInterface, bytecode?: string, signerOrOptions?: any) => Promise<ethers.ContractFactory>;
declare const getContractAt: (contractNameOrABI: ethers.ContractInterface, address: string, signer?: any) => Promise<ethers.Contract>;
declare const getSigner: (address: string) => Promise<SignerWithAddress>;
declare const getSigners: () => Promise<any>;
declare const getContractFactoryFromArtifact: (artifact: any, signerOrOptions: {
    signer: any;
    libraries: any;
}) => Promise<ethers.ContractFactory>;
declare const getContractAtFromArtifact: (artifact: any, address: string, signerOrOptions?: any) => Promise<ethers.Contract>;
export { getContractAtFromArtifact, getContractFactoryFromArtifact, getSigners, getSigner, getContractAt, getContractFactory };
