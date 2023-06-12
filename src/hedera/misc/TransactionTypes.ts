export type TransactionTypes =
  | 'CONSENSUSCREATETOPIC'
  | 'CONSENSUSDELETETOPIC'
  | 'CONSENSUSSUBMITMESSAGE'
  | 'CONSENSUSUPDATETOPIC'
  | 'CONTRACTCALL'
  | 'CONTRACTCREATEINSTANCE'
  | 'CONTRACTDELETEINSTANCE'
  | 'CONTRACTUPDATEINSTANCE'
  | 'CRYPTOADDLIVEHASH'
  | 'CRYPTOAPPROVEALLOWANCE'
  | 'CRYPTOCREATEACCOUNT'
  | 'CRYPTODELETE'
  | 'CRYPTODELETEALLOWANCE'
  | 'CRYPTODELETELIVEHASH'
  | 'CRYPTOTRANSFER'
  | 'CRYPTOUPDATEACCOUNT'
  | 'ETHEREUMTRANSACTION'
  | 'FILEAPPEND'
  | 'FILECREATE'
  | 'FILEDELETE'
  | 'FILEUPDATE'
  | 'FREEZE'
  | 'NODESTAKEUPDATE'
  | 'SCHEDULECREATE'
  | 'SCHEDULEDELETE'
  | 'SCHEDULESIGN'
  | 'SYSTEMDELETE'
  | 'SYSTEMUNDELETE'
  | 'TOKENASSOCIATE'
  | 'TOKENBURN'
  | 'TOKENCREATION'
  | 'TOKENDELETION'
  | 'TOKENDISSOCIATE'
  | 'TOKENFEESCHEDULEUPDATE'
  | 'TOKENFREEZE'
  | 'TOKENGRANTKYC'
  | 'TOKENMINT'
  | 'TOKENPAUSE'
  | 'TOKENREVOKEKYC'
  | 'TOKENUNFREEZE'
  | 'TOKENUNPAUSE'
  | 'TOKENUPDATE'
  | 'TOKENWIPE'
  | 'UNCHECKEDSUBMIT'
  | 'UNKNOWN'
  | 'UTILPRNG';

export const TransactionTypes = {
  Consensuscreatetopic: 'CONSENSUSCREATETOPIC' as TransactionTypes,
  Consensusdeletetopic: 'CONSENSUSDELETETOPIC' as TransactionTypes,
  Consensussubmitmessage: 'CONSENSUSSUBMITMESSAGE' as TransactionTypes,
  Consensusupdatetopic: 'CONSENSUSUPDATETOPIC' as TransactionTypes,
  Contractcall: 'CONTRACTCALL' as TransactionTypes,
  Contractcreateinstance: 'CONTRACTCREATEINSTANCE' as TransactionTypes,
  Contractdeleteinstance: 'CONTRACTDELETEINSTANCE' as TransactionTypes,
  Contractupdateinstance: 'CONTRACTUPDATEINSTANCE' as TransactionTypes,
  Cryptoaddlivehash: 'CRYPTOADDLIVEHASH' as TransactionTypes,
  Cryptoapproveallowance: 'CRYPTOAPPROVEALLOWANCE' as TransactionTypes,
  Cryptocreateaccount: 'CRYPTOCREATEACCOUNT' as TransactionTypes,
  Cryptodelete: 'CRYPTODELETE' as TransactionTypes,
  Cryptodeleteallowance: 'CRYPTODELETEALLOWANCE' as TransactionTypes,
  Cryptodeletelivehash: 'CRYPTODELETELIVEHASH' as TransactionTypes,
  Cryptotransfer: 'CRYPTOTRANSFER' as TransactionTypes,
  Cryptoupdateaccount: 'CRYPTOUPDATEACCOUNT' as TransactionTypes,
  Ethereumtransaction: 'ETHEREUMTRANSACTION' as TransactionTypes,
  Fileappend: 'FILEAPPEND' as TransactionTypes,
  Filecreate: 'FILECREATE' as TransactionTypes,
  Filedelete: 'FILEDELETE' as TransactionTypes,
  Fileupdate: 'FILEUPDATE' as TransactionTypes,
  Freeze: 'FREEZE' as TransactionTypes,
  Nodestakeupdate: 'NODESTAKEUPDATE' as TransactionTypes,
  Schedulecreate: 'SCHEDULECREATE' as TransactionTypes,
  Scheduledelete: 'SCHEDULEDELETE' as TransactionTypes,
  Schedulesign: 'SCHEDULESIGN' as TransactionTypes,
  Systemdelete: 'SYSTEMDELETE' as TransactionTypes,
  Systemundelete: 'SYSTEMUNDELETE' as TransactionTypes,
  Tokenassociate: 'TOKENASSOCIATE' as TransactionTypes,
  Tokenburn: 'TOKENBURN' as TransactionTypes,
  Tokencreation: 'TOKENCREATION' as TransactionTypes,
  Tokendeletion: 'TOKENDELETION' as TransactionTypes,
  Tokendissociate: 'TOKENDISSOCIATE' as TransactionTypes,
  Tokenfeescheduleupdate: 'TOKENFEESCHEDULEUPDATE' as TransactionTypes,
  Tokenfreeze: 'TOKENFREEZE' as TransactionTypes,
  Tokengrantkyc: 'TOKENGRANTKYC' as TransactionTypes,
  Tokenmint: 'TOKENMINT' as TransactionTypes,
  Tokenpause: 'TOKENPAUSE' as TransactionTypes,
  Tokenrevokekyc: 'TOKENREVOKEKYC' as TransactionTypes,
  Tokenunfreeze: 'TOKENUNFREEZE' as TransactionTypes,
  Tokenunpause: 'TOKENUNPAUSE' as TransactionTypes,
  Tokenupdate: 'TOKENUPDATE' as TransactionTypes,
  Tokenwipe: 'TOKENWIPE' as TransactionTypes,
  Uncheckedsubmit: 'UNCHECKEDSUBMIT' as TransactionTypes,
  Unknown: 'UNKNOWN' as TransactionTypes,
  Utilprng: 'UTILPRNG' as TransactionTypes,
};

export enum TransactionTypesEnum {}
Object.entries(TransactionTypes).forEach(([key, value]) => {
  TransactionTypesEnum[value] = value;
});
