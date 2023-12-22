import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailAnalyticsController } from './mail-analytics/mail-analytics.controller';
import { MailAnalyticsService } from './mail-analytics/mail-analytics.service';
import { MailAnalyticsModule } from './mail-analytics/mail-analytics.module';

@Module({
  imports: [MailAnalyticsModule],
  controllers: [AppController,MailAnalyticsController],
  providers: [AppService, MailAnalyticsService],
})
export class AppModule {}
