import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { MailAnalyticsService } from './mail-analytics.service';
import { MailAnalyticsInputDto } from './input-dto/input.dto';

/**
 * In order to create a basic controller, we use classes and decorators(@Controller()).
 * Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
 */
@Controller('categorize')
export class MailAnalyticsController {
  constructor(private readonly analyticsService: MailAnalyticsService) {}

  /**
     * @description This function is used to detect spam mails, if not spam then categorize them into different categories, namely: Promotions, Social, Primary
     * @param mailData
     * @returns boolean
     */
  @Post('mail')
  /**
   * The @Post() HTTP request method decorator before the categorizeMail() method tells Nest to create a handler for a specific endpoint for HTTP requests
   */
  async categorizeMail(@Body() mailData: MailAnalyticsInputDto): Promise<string> {
    /**
     *  In most cases, it's not necessary to grab these properties manually.
     *  We can use dedicated decorators instead, such as @Body() represents req.body or @Query() represents req.query.
     */
    let category: string;
    console.log("MailAnalyticsInputDto Request", mailData);
    category = await this.analyticsService.categorize(mailData);

    console.log("OUTPUT category: ", category);
    return category == "" ? "primary" : category;
  }
}