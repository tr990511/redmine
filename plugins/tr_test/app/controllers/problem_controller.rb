class ProblemController < ApplicationController

  def index
 
  end

  def show
    debugger
  end

  def add
    debugger
  end

  def edit
    debugger
  end

  def show
    debugger
  end

  def delete
    debugger
  end
  
  private
  
  def get_params
    params.require(:kpi_year).permit(:name,
                                      :yearly,
                                      :project_id,
                                      :author_id)
  end
end
