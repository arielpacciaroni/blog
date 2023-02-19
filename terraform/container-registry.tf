resource "aws_ecr_repository" "blog_container" {
  name                 = var.container_name
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }

  tags = {
    Name        = "Blog container"
    Environment = "Production"
    CreatedBy   = "Terraform"
  }
}