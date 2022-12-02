class Api::CommentsController < ApplicationController
  before_action :set_contact
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    render json: @contact.comments
  end

  def show
    render json: @comment
  end

  def create
    @comment = @contact.comments.new(comment_params)
    if @comment.save
      render json: @comment 
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment 
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy 
    render json: { message: 'comment deleted' }
  end

  private 
    def set_contact
      @contact = Contact.find(params[:contact_id])
    end

    def comment_params
      params.require(:comment).permit(:author, :body)
    end

    def set_comment
      @comment = @contact.comments.find(params[:id])
    end
end
