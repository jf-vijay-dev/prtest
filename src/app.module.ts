import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailAnalyticsController } from './mail-analytics/mail-analytics.controller';
import { MailAnalyticsService } from './mail-analytics/mail-analytics.service';
import { MailAnalyticsModule } from './mail-analytics/mail-analytics.module';

/**
 * This is a root module.
 * Each application has at least one module, a root module.
 * The root module is the starting point,
 * Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies.
 */
@Module({
  imports: [MailAnalyticsModule],
  controllers: [AppController,MailAnalyticsController],
  providers: [AppService, MailAnalyticsService],
})
export class AppModule {}
