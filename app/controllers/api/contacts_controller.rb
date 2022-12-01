class Api::ContactsController < ApplicationController
  before_action :set_list
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    render json: @list.contacts
  end

  def show
    render json: @contact
  end

  def create
    @contact = @list.contacts.new(contact_params)
    if @contact.save
      render json: @contact 
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact 
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @contact.destroy 
    render json: { message: 'Contact deleted' }
  end

  private 
    def set_list
      @list = List.find(params[:list_id])
    end

    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email, :phone, :fav)
    end

    def set_contact
      @contact = @list.contacts.find(params[:id])
    end
end
