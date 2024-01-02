import { Module } from '@nestjs/common';
import { MailAnalyticsController } from './mail-analytics.controller';
import { MailAnalyticsService } from './mail-analytics.service';

/**
 *  Registering the provider and consumers(controllers) with the Nest IoC container.
 */
@Module({
  controllers: [MailAnalyticsController],
  providers: [MailAnalyticsService],
})
export class MailAnalyticsModule {}