package service

import (
	"context"
	"github/rocheleedenis/full-cycle-3.0/internal/database"
	"github/rocheleedenis/full-cycle-3.0/internal/pb"
)

type CategoryService struct {
	pb.UnimplementedCategoryServiceServer
	CategoryDB database.Category
}

func NewCategoryService(categoryDB database.Category) *CategoryService {
	return &CategoryService{
		CategoryDB: categoryDB,
	}
}

func (c *CategoryService) CreateCategory(ctx context.Context, input *pb.CreateCategoryRequest) (*pb.CategoryResponse, error) {
	// return nil, status.Errorf(codes.Unimplemented, "method CreateCategory not implemented")
	category, err := c.CategoryDB.Create(input.Name, input.Description)

	if err != nil {
		return nil, err
	}

	categoryResponse := &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}

	return &pb.CategoryResponse{
		Category: categoryResponse,
	}, nil
}
