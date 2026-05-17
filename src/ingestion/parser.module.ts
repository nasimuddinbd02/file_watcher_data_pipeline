import { Module } from '@nestjs/common';
import { ParserService } from '@src/services/ParserService';

/**
 * ParserModule — owns the JSON parsing and validation layer.
 * Exports ParserService so the pipeline layer can consume it.
 */
@Module({
  providers: [ParserService],
  exports: [ParserService],
})
export class ParserModule {}
