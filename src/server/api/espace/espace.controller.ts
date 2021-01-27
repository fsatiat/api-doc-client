import { Controller, Get, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorDTO } from '../core/error/error.dto';
import { EspaceDTO } from './dto/espace.dto';
import { AllergenDTO, MenuDTO } from './dto/menu.dto';

@ApiTags('Espace')
@Controller('espace')
export class EspaceController {

  @Get()
  @ApiOperation({ summary: 'Get all espaces' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorDTO, })
  findAll(): EspaceDTO[] {
    const espace: EspaceDTO = { id: 1, name: "espace 1" };
    return [espace];
  }

  @Get('/:id/menu')
  @ApiOperation({ summary: 'Return menu for the selected espace' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorDTO, })
  getMenu(@Param('id') id: number): MenuDTO[] {
    const allergen: AllergenDTO = {
      id: 1,
      name: "",
      pictureBase64: ""
    }
    const menu: MenuDTO = {
      id: 1,
      category: "",
      famille: "",
      ingredients: "",
      name: "",
      pictureBase64: "",
      price: 1.69,
      sousfamille: "",
      stand: "",
      allergens: [allergen]
    }

    return [menu]
  }
}
