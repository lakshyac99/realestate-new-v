/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WishlistService } from "../wishlist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WishlistCreateInput } from "./WishlistCreateInput";
import { Wishlist } from "./Wishlist";
import { WishlistFindManyArgs } from "./WishlistFindManyArgs";
import { WishlistWhereUniqueInput } from "./WishlistWhereUniqueInput";
import { WishlistUpdateInput } from "./WishlistUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WishlistControllerBase {
  constructor(
    protected readonly service: WishlistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Wishlist })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWishlist(
    @common.Body() data: WishlistCreateInput
  ): Promise<Wishlist> {
    return await this.service.createWishlist({
      data: {
        ...data,

        listing: {
          connect: data.listing,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Wishlist] })
  @ApiNestedQuery(WishlistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wishlists(@common.Req() request: Request): Promise<Wishlist[]> {
    const args = plainToClass(WishlistFindManyArgs, request.query);
    return this.service.wishlists({
      ...args,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
            price: true,
            title: true,
            photos: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Wishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wishlist(
    @common.Param() params: WishlistWhereUniqueInput
  ): Promise<Wishlist | null> {
    const result = await this.service.wishlist({
      where: params,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Wishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWishlist(
    @common.Param() params: WishlistWhereUniqueInput,
    @common.Body() data: WishlistUpdateInput
  ): Promise<Wishlist | null> {
    try {
      return await this.service.updateWishlist({
        where: params,
        data: {
          ...data,

          listing: {
            connect: data.listing,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Wishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWishlist(
    @common.Param() params: WishlistWhereUniqueInput
  ): Promise<Wishlist | null> {
    try {
      return await this.service.deleteWishlist({
        where: params,
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
