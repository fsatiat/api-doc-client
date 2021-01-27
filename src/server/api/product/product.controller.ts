import { Controller, Get, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorDTO } from '../core/error/error.dto';
import { ProductDTO } from './dto/product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {

  @Get(':id')
  @ApiOperation({ summary: 'Return detail for product' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorDTO })
  findOne(@Param('id') id: number): ProductDTO {
    const product: ProductDTO = {
      id: id,
      category: "",
      famille: "",
      ingredients: "",
      name: "",
      pictureBase64: "",
      sousfamille: "",
    }

    return product;
  }
}
