import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ServicesService } from './auth/services/services.service';
import { AuthService } from './services/auth/auth.service';
import { AuthService } from './services/auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [ServicesService, AuthService],
})
export class AuthModule {}
