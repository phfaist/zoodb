# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'ZooDb'
copyright = '2023, Philippe Faist'
author = 'Philippe Faist'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx_js']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



js_source_path = '..'
jsdoc_config_path = './conf.json'

primary_domain = 'js'


highlight_language = 'js'


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']



# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
html_theme_options = {
    'font_family': '"Source Serif 4"',
    'font_size': '15px',
    'head_font_family': '"Source Serif 4"',
    'code_font_family': '"Source Code Pro"',
    'github_user': 'phfaist',
    'github_repo': 'zoodb',
    'github_button': True,
    'github_type': 'star',
    'github_count': 'true',

    'fixed_sidebar': True,
    'page_width': '950px',
    'sidebar_width': '220px',
}
html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        'relations.html',
        'searchbox.html',
#        'donate.html',
    ]
}
