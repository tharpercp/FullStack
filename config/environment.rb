# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.deep_format_keys true
Jbuilder.key_format camelize: :lower
