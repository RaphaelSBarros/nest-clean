import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { Module } from '@nestjs/common'
import { JwTEncrypter } from './jwt-encrypter'
import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { BcryptHasher } from './bcrypt-hasher'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

@Module({
  providers: [
    { provide: Encrypter, useClass: JwTEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule {}
