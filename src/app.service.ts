import { Injectable } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Injectable()
export class AppService {
  constructor(private emailService: EmailService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async signUp(user: { email: string; name: string }) {
    await this.emailService.sendUserWelcome(user);
  }
}
