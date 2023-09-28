import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}
  async sendUserWelcome(user: { name: string; email: string }) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Send mail example',
      template: './main',
      context: {
        name: user.name,
      },
    });
  }
}
