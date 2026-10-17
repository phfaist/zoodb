.. _zoodb-flm:

Flexible Latex-Like Markup (FLM)
================================

The formatted content of a zoo is written in FLM, a markup language that takes
its syntax from LaTeX: emphasis, mathematics, lists, sections,
cross-references, citations, footnotes, figures and tables.  ZooDb processes it
with flm-rs, the Rust implementation of FLM, compiled to WebAssembly and
bundled with the package (see :doc:`zoodb.zooflm`).

This page summarizes what the standard package of flm-rs accepts as ZooDb
configures it by default.  The complete reference is the language reference of
flm-rs, ``docs/language-syntax.md`` in the flm-rs repository, which describes
every command and environment; its guide ``docs/python-flm-migration.md``
lists every difference from the Python implementation of FLM that ZooDb used up
to version 0.2.

Support for FLM is easy to enable if you use the tools to set up a “Standard
Zoo” (see :ref:`zoodb-std`).


How to enable FLM?
------------------

When defining your object structure, you specify which fields hold FLM content
in your schemas with the special `_flm:` property field (see
:ref:`zoodb-schemas-flmcontent`).  A field marked ``standalone`` (a name, a
title) may hold no label, reference, citation, footnote or anything numbered,
so that it renders the same wherever it is shown.

In your rendered zoo output, you need the stylesheet of FLM content and, for
mathematics, MathJax 4.  The zoo's FLM engine gives both:
``html_stylesheet()`` returns the CSS, and ``html_scripts()`` returns the
script tags to place in a page's ``<head>``, which configure and load MathJax 4
(see :doc:`zoodb.zooflm`).  Mathematics is written into the HTML as its source,
and MathJax typesets it in the browser.

The features are configured as data: in the standard setup,
``flm_options.engine.settings`` holds one map of settings per feature, and
``flm_options.engine.off`` lists the features switched off.  User definitions
(macros and environments defined by substitution) are declared there too,
under ``userdefs``; content cannot define macros of its own.  The sections
below give the name of each feature in parentheses.


FLM Example
-----------

First, here's a short example of things you can typeset with FLM.

.. code:: latex

   Text can contain some simple LaTeX macros, for instance
   for \textbf{bold text} and \emph{italic text}.

   Use two line breaks to start a new paragraph. You
   can use inline math like \(\alpha=\sum_j\beta_j\) and
   display equations like
   \begin{align}
       S_1 &= I\,X\,Z\,Z\,X\ ;  \nonumber\\
       S_2, \ldots, S_4 &= \text{cyclical permutations of \(S_1\)}\ .
       \label{eq:stabilizers}
   \end{align}

   Refer to equations with \eqref{eq:stabilizers}, etc. ...   %% a comment


FLM Available Features
----------------------

The following features are available with the default configuration, or with
a setting that is easy to change.


Text, special characters and comments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(``blocks``, ``textstyles``, ``literals``)

- Leave a blank line to start a new paragraph.  Whitespace is simplified as
  usual in LaTeX: consecutive spaces and single line breaks count as one
  space.

- The macros ``\emph{...}``, ``\textit{...}``, ``\textbf{...}`` and
  ``\texttt{...}`` give emphasized, italic, bold and monospaced text.

- Input accents, special characters, etc., directly as Unicode: ``éàààé😅Á``.
  Note that source files should always be encoded using the UTF-8 encoding.
  You can use pretty quotes ``‘`` ``’`` ``“`` ``”``; dashes ``—`` (em dash),
  ``–`` (en dash, for ranges); spaces such as the non-breaking space
  (U+00A0), the em space (U+2003) or the thin space (U+2009), etc.  The LaTeX
  spellings are replaced as well: ``---`` and ``--`` become an em dash and an
  en dash, ``...`` an ellipsis, two backticks and ``''`` curly double quotes,
  and straight quotes ``"`` and ``'`` are curled according to their position.

- Protect characters that might have a special meaning using the following
  macros: ``\textbackslash`` (backslash character), ``\{`` (open brace),
  ``\}`` (closing brace), ``\%`` (percent character), ``\&`` (ampersand),
  ``\$`` (dollar sign), ``\#`` (number sign).  A backslash followed by a space
  forces a space, and ``~`` is a non-breaking space.

- *Comments* start with ``%%`` and run to the end of the line.  A single
  ``%`` is an error, since it could be meant either as a percent sign or as a
  LaTeX comment: write ``\%`` for the percent sign.  Likewise ``$`` is an
  error unless the zoo enables dollar math (the engine option
  ``dollar_math``): write ``\$`` for the dollar sign.

- A macro or an environment that no feature defines is an error, reported with
  its position in the data file; the content is still rendered where errors
  are allowed (a preview), with the unknown command shown as written.


Mathematical equations
~~~~~~~~~~~~~~~~~~~~~~

(``math``)

- Math expressions can be written as ``\( ... \)``; display math as
  ``\[ ... \]`` (unnumbered) or with the environments
  ``\begin{equation} ... \end{equation}``,
  ``\begin{align} ... \end{align}`` and
  ``\begin{gather} ... \end{gather}``, or their starred forms ``equation*``,
  ``align*`` and ``gather*`` (unnumbered).

- Formulas are passed as written to MathJax, which typesets them in the
  browser: you can use the standard LaTeX math commands that MathJax supports,
  such as those of AMS-TeX (``\sim``, ``\langle``, etc.), and environments
  like ``split`` or ``cases`` inside a display formula.  FLM does not check
  what a formula contains, so a command that MathJax does not know is
  reported by MathJax in the browser, not when the zoo is built.

- Inside ``align``, ``gather`` and ``equation``, ``\\`` ends an equation line,
  and each line that is not marked ``\nonumber`` gets a number.  Write
  ``\label{eq:...}`` anywhere in a line to label it (the label must start with
  the prefix ``eq:``), and ``\tag{...}`` to name a line in place of its number.
  Use ``\nonumber``, not ``\notag``, to leave a line unnumbered.  A ``\label``
  on a line that takes no number is an error.

- Refer to labeled equations with ``\eqref{eq:...}``, which shows the number
  in parentheses, “(1)”, or with ``\ref{eq:...}``, which shows “Eq. (1)”.

- Text inside a formula is written with ``\text{...}``; its content is FLM
  text, so it may hold formatting, a reference, or a formula in ``\( ... \)``.


Bullet-point and enumeration lists
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(``lists``)

- Create numbered lists using
  ``\begin{enumerate} \item ... \item ... \end{enumerate}``.

- Create bullet-point lists with ``\begin{itemize} \item ... \end{itemize}``.

- Create description lists with
  ``\begin{description} \item[Term] ... \end{description}``.  In any list,
  ``\item[...]`` sets the label of that item.

- Nested lists change their labels at each depth: ``•``, ``-``, ``▸`` for
  ``itemize``, and ``1.``, ``(i)``, ``a-`` for ``enumerate``.

- You can customize the labels of a list with its optional argument.  The
  short form is LaTeX's ``enumerate`` package syntax: in a bracket made only of
  the characters ``[]().:-+*aAiI1``, one of ``1``, ``a``, ``A``, ``i``, ``I``
  stands for the item number, formatted respectively as an arabic numeral
  (``1, 2, ...``), a lowercase latin letter (``a, b, ...``), an uppercase latin
  letter (``A, B, ...``), a lowercase roman numeral (``i, ii, iii, iv,
  ...``), or an uppercase roman numeral (``I, II, III, IV, ...``).  Any other
  label is written with the key ``label=``, in which ``#{arabic}``,
  ``#{alph}``, ``#{Alph}``, ``#{roman}`` and ``#{Roman}`` stand for the number.
  Examples:

  .. code:: latex

      \begin{enumerate}[(a)]                %% → (a), (b), ...
      \begin{enumerate}[i)]                 %% → i), ii), ...
      \begin{enumerate}[label=Step #{arabic}:]   %% → Step 1:, Step 2:, ...
      \begin{itemize}[label={⇒}]            %% → use '⇒' as bullet character

  A bracket that is neither the short form nor key-values is an error: a
  custom bullet such as ``⇒`` must be written ``[label={⇒}]``, not ``[{⇒}]``.

- To refer to an item, write ``\label{item:...}`` directly after its
  ``\item`` (and its bracket, if any): ``\item\label{item:mix} Mix.``.  Then
  ``\ref{item:mix}`` shows “Item 1”.


Bibliographic citations
~~~~~~~~~~~~~~~~~~~~~~~

(``citations``)

- If the relevant citation source retrievers are installed (see
  :doc:`zoodb.citationmanager`), you can cite relevant papers directly e.g.
  with their arXiv number as ``\cite{arxiv:XXXX.XXXXX}`` or
  ``\cite{arxiv:quant-ph/XXXXXXX}``, or using their DOI as
  ``\cite{doi:10.ZZZZZZ}``.

  DOIs are automatically retrieved for ``arXiv`` citations, so please use
  ``arXiv`` identifiers whenever possible.  If the DOI is not retrieved
  correctly (e.g., it is not listed correctly on the arXiv page), you can
  provide manual overrides through configuration (see the citation sources
  documentation).

  Citations can be combined as in LaTeX: ``\cite{arxiv:XXX,arxiv:YYY,doi:ZZZ}``.
  If there is neither an arxiv number nor a DOI number available, you can enter
  a citation manually as ``\cite{manual:{A. Smith et al., \emph{Journal of Weird
  Stuff} 12:\textbf{A}, 1003--1592 (1943)}}``.

- Cited works are numbered in the order of their first citation, and listed
  under the heading “References” at the place where the page's template puts
  its endnotes.  ``\cite[Thm. 4]{arxiv:XXX}`` adds a note after the number:
  “[1; Thm. 4]”.  Consecutive ``\cite`` commands form one mark.

- A ``\cite`` attaches its mark to the word before it, with a no-break space
  that it writes itself: write ``some text \cite{...}``.  A ``~`` written
  before ``\cite`` adds a second no-break space.

- ``\R\cite{...}`` writes the citation as a noun: “ref. [1]”, “refs. [1,2]”;
  ``\R[S]\cite{...}`` capitalizes it, for the start of a sentence.


References to other objects and external links
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(``refs``, ``href``, ``xnotes``)

- Reference other zoo objects using ``\ref{<object_type>:<object_id>}``,
  which shows the object's name as a link.  To set a custom label to show, you
  can use ``\hyperref[<object_type>:<object_id>]{link text}``.

- Insert hyperlinks to other web pages as
  ``\href{https://example.com/example/page}{shown link text}`` or with
  ``\url{https://example.com/example/page}``, and e-mail addresses with
  ``\email{someone@example.com}``.  The address is taken exactly as written:
  ``%``, ``#``, ``~`` and ``_`` need no escaping in it.

- Insert references to figures and tables with ``\ref{figure:my-figure-label}``
  and ``\ref{table:my-table-label}``.  In contrast to LaTeX's usual behavior,
  the output of these commands includes an abbreviated word, as in “Fig. 1” or
  “Tab. 1” (like LaTeX/`cleveref <https://ctan.org/pkg/cleveref>`_'s
  ``\cref``); ``\ref[S]{figure:...}`` writes the full word, “Figure 1”, and
  ``\ref[noprefix]{...}`` the number alone.  A ``\ref`` can name several
  targets, separated by commas: ``\ref{eq:a,eq:b}``.

- You can insert footnotes with ``\footnote{...}``.  They are numbered on each
  page and listed under the heading “Footnotes” at the place where the page's
  template puts its endnotes.  A footnote is labeled inside its optional
  argument, ``\footnote[\label{fn:my-note}]{...}``, for ``\ref{fn:my-note}``.

- A reference that resolves to nothing shows its label as written.  It is an
  error, or a warning where the zoo allows unresolved references (the
  standard setup's option ``allow_unresolved_references``, which previews
  use).


Sections, paragraphs, and definition terms
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(``headings``, ``defterm``)

- *Sectioning*: Use ``\section{Title}``, ``\subsection{Title}``,
  ``\subsubsection{Title}`` and ``\paragraph{Title}`` to generate headings and
  to split a long field (such as description) into logical sub-parts.
  Headings are not numbered.  You can pin labels with
  ``\label{sec:label-name}`` written after the heading (use ``sec:`` for all
  heading levels; although see also ``topic:`` labels below).  Then
  ``\ref{sec:...}`` will expand to a link with the heading's title, also from
  other pages in the zoo.  **The section label must be unique across the
  zoo!**

- *Definition of technical terms*: Use ``\begin{defterm}{<term>}
  ... \end{defterm}`` to define a technical term (e.g., *Knill-Laflamme
  conditions*); the definition is shown with the term and a colon before it.
  You can then later refer to that term using the syntax ``\term{<term>}``
  from anywhere else in the zoo.  You must provide the term with the exact
  same spelling (including character case).  If the term needs to be altered
  for integration in a sentence, use ``\term[<original term>]{display
  term}``.  Other spellings of the term, such as a plural, can be declared in
  the definition with ``\aliasterm{...}``, written after the term:
  ``\begin{defterm}{Markov chain}\aliasterm{Markov chains} ...``.

- *Topic labels*: You can pin down labels of the form
  ``\label{topic:<label-name>}``, with the prefix ``topic:``, to designate a
  location that discusses or explains a particular topic that you might want
  to refer to from somewhere else.  These labels can be pinned to headings and
  ``defterm`` environments (written after the heading's title or the term).
  Using `topic:` labels has the advantage of later changing the label target
  from, say, a `defterm` environment to a section heading, without having to
  change the label.  For instance, you can use
  ``\label{topic:CSS-to-homology-correspondence}`` in a `defterm` environment
  and then later decide to change the `defterm` into a section instead.

- All labels (``sec:``, ``topic:``, ``eq:``, ``figure:``, ...) must be unique
  across the zoo: a label defined twice is an error.


Figures and tables
~~~~~~~~~~~~~~~~~~

(``floats``, ``graphics``, ``cells``)

- You can use the float environments ``\begin{figure} ... \end{figure}`` and
  ``\begin{table} ... \end{table}``.  The syntax of these environments is as
  follows:

  .. code:: latex

    \begin{figure}
        \includegraphics{figure_file_name}
        \caption{Your figure can have a caption}
        \label{figure:my-figure-label}
    \end{figure}

    \begin{table}
        \begin{cells}
          \celldata{
            (... table content, see below...)
          }
        \end{cells}
        \caption{Your table can have a caption}
        \label{table:my-table-label}
    \end{table}

  A ``figure`` holds exactly one ``\includegraphics``; a ``table`` holds one
  ``cells`` table or one image.  Both environments place their content where
  they are written; they are never moved.  However, you should avoid counting
  on this behavior, and use the standard label-ref mechanism to refer to the
  figure from the main text.

  A float is numbered when it has a ``\label`` and no ``\nonumber``: it is
  shown with the line “*Figure 1:* caption”, or “*Figure 1*” without a
  ``\caption``.  A float without a number shows its caption alone, and one
  with neither a number nor a caption shows its content alone.  ``\nonumber``
  leaves a labeled float unnumbered, so references to it show the alt text of
  its caption, or the caption itself: ``\caption[alt=Short caption]{...}``
  gives that short text.  The label prefix ``figure:`` or ``table:`` must
  match the float environment name.

- *Figure images:* By default, ``\includegraphics`` can be used only inside a
  float.  A zoo can make it usable anywhere with the setting ``graphics:
  { global: true }``.  The ``figure_file_name`` must be the name of an image
  file that can be found in the data file tree, searched relative to the
  source data file's path.  In ``figure_file_name``, the file name extension
  (e.g., ``.svg``) can be omitted (the standard setup tries ``.svg``,
  ``.png``, ``.jpeg`` and ``.jpg``).  A recommended file structure for objects
  that have image files is to place the data file along with the image files in
  their own, separate folder that is specific to that object.

  The options ``\includegraphics[alt=..., width=..., height=...]{...}`` set
  the image's alternative text and its size (in ``pt``, ``mm``, ``cm`` or
  ``in``), but a size given there is reported as a warning: please prepare
  your figure directly at the correct size.  Bear in mind that if you have
  text elements in your figure, then resizing the figure will cause a visual
  mismatch with the article text appearance.  See notes on images below.

- *Tables:* The table's data is given through the
  ``\begin{cells}...\end{cells}`` environment, which is available inside a
  ``table`` float (or anywhere, with the setting ``cells: { global: true }``).
  See below for a description of the syntax for specifying table contents.


**Image files:**

It is recommended to use a vector SVG file as it can be displayed nicely on
screens with high resolution.

The size at which you place elements in your SVG file is important.  The stated
physical dimensions that are present in the SVG file are used to place the image
at the correct size and resolution to match the surrounding article.  Generally,
text in the figure should be typeset using a point size of about 10 points
(depending on the font size you chose to display your zoo in).

Be sure also to **set the page dimensions of your SVG document correctly** to
match the size of your graphic, with the correct scale for rendering on our web
page.  If you use Inkscape, you can select “File” → “Document Properties” →
“Resize page to drawing or selection” and make sure you have reasonable figure
dimensions.  Make sure the figure width is reasonable to ensure a good fit with
the remaining page of the zoo.

If you set the SVG image's dimensions in units of pixels ("px"), ZooDb will
assume a resolution of 96 DPI (as per web standards).  [If you're using Affinity
Designer, set the document resolution to 96 dpi, and uncheck ‘Set viewBox’ in
the SVG export options.]

You can also use PNG or JPG/JPEG files.  **Please make sure you set the physical
resolution (DPI) of the image correctly**, as this information is honored to
determine the figure size.  Most graphics software will allow you to adjust this
setting (look for "physical dimensions", "dots-per-inch", "pixels-per-inch", or
"DPI").  In `GIMP <https://www.gimp.org/>`_, you can set the resolution with
“Image” -> “Resize” and providing any two of physical dimensions (e.g.,
mm,cm,in,pt), pixel dimensions, and DPI.  Make sure the figure width is
reasonable to ensure a good fit with the remaining page of the zoo.

**Cells — Table Contents:**

The syntax for the table cells is as follows:

.. code:: latex

  \begin{cells}
    \celldata{
       One & Two & Three \\
       Four & Five & Six
    }
    [ ... ]
  \end{cells}

The ``{cells}`` environment may contain any number of calls to the
macros ``\celldata`` and ``\cell``.  Each such macro call adds new
cells to the table.  A ``\\`` between them ends the current row.  The macros
have the following syntax:

- ``\cell{contents}``, ``\cell<style1 style2 ...>{contents}``,
  ``\cell[location]{contents}``,
  ``\cell<styles...>[location]{contents}``: Add a single cell to
  the table.  Unless a location is specified, the cell is added in
  the next column on the current row.  A cell's contents may hold
  paragraphs, a list or a displayed formula.

  The `[location]` can either specify a column `[COL]` (will use
  the current row) or a pair `[ROW;COL]`.  Each of `COL` and `ROW`
  can be:

  - a row/column number (row and column numbers start at 1);

  - left empty, or set to the character ``.``, to mean the current
    row/column;

  - a ``\merge{INDEXRANGE}`` command to create a merged cell
    spanning multiple rows/columns.  Here, the ``INDEXRANGE`` can
    be comma-separated numbers (e.g., ``1,2,3`` to include the
    given row/column numbers), including ranges specified as
    ``START-END`` (such as e.g. ``2-4`` for row/column indices 2
    through 4, included) as well as ``START+NUMBER`` to include
    ``NUMBER`` columns starting at index number ``START`` (e.g.,
    ``2+3`` will include column numbers ``2``, ``3`` and ``4``).
    Ranges can be combined, separated by commas, but in any case
    the `INDEXRANGE` must correspond to a contiguous set of
    indices.

  The ``<styles...>`` argument specifies the style that will be
  applied to the cell.  See information on cell styles below.  You
  can specify multiple styles by separating them with spaces.

  *Example:* ``\cell<H l>[1;\merge{3-4}]{Hi!}`` will create a
  left-aligned (``l``) header (``H``) cell at row ``1`` and
  spanning the columns ``3`` and ``4``, with the contents
  “``Hi!``”.


- ``\celldata{tabular data}``, ``\celldata<cellstyles>{tabular
  data}``, ``\celldata[locations]{tabular data}``,
  ``\celldata<cellstyles>[locations]{tabular data}``: A shorthand
  for sequentially adding multiple cells.

  The ``{tabular data}`` is specified as you'd do for the LaTeX
  ``\begin{tabular} ... \end{tabular}`` environment, by separating
  rows with ``\\`` and separating columns with ``&``.  Each entry is
  one paragraph of text; an empty entry leaves its position empty.

  The cells can be placed at given locations, and each cell is
  styled according to the given styles.

  The optional ``[locations]`` is of the form of either
  ``[COLUMNS]`` or ``[ROWS;COLUMNS]``.  If ``ROWS`` are not
  specified, then rows are added sequentially starting from the
  current row.  Each of ``ROWS`` and ``COLUMNS`` specify a
  sequence of row/column indices to which the given data will be
  assigned.  For instance, ``\celldata[3,2,1]{A & B & C}`` will
  place ``A`` in the 3rd column, ``B`` in the 2nd column, and
  ``C`` in the 1st column.  More specifically, ``ROWS`` and
  ``COLUMNS`` are specified a comma-separated list of indices, of
  ranges of the form ``START-END`` or ``START+NUMBER`` (see
  above), and of ``\merge{}`` commands (see above).  Omitting
  ``START`` or ``END`` is interpreted as the current or the last
  index, respectively.  For instance:

  - ``\celldata[2-5]{A & B & C & D\\ E & F & G & H}`` will place
    ``A``, ``B``, ``C``, ``D`` in columns 2, 3, 4, 5 of the first
    row, and place ``E``, ``F``, ``G``, ``H`` in columns 2, 3, 4,
    5 of the following row;

  - ``\celldata[\merge{1,2},\merge{+2};4,6]{A & AA \\ B & BB}``
    will place ``A`` in a merged cell spanning rows ``1,2`` and in
    column ``4``, ``AA`` in a merged call spanning rows ``1,2``
    and in column ``6``, ``B`` in a merged call spanning rows
    ``3,4`` and in column ``4``, and ``BB`` in a merged call
    spanning rows ``3,4`` and in column ``6``.

  The ``styles`` is a comma-separated list of styles to apply to
  the different columns.  The same style is applied to all
  provided cells of that column.  The sequence corresponds to the
  given data, not the final column number.  If there are fewer
  style specifications than columns, then the last style is
  repeated as necessary.  For each column style you can specify
  multiple styles by separating them with spaces.  For instance:

  - ``\celldata<H>{One & Two & Three}`` Creates three header
    (``H``) cells on a single row.

  - ``\celldata<H l, H c>{One & Two & Three}`` Creates one
    left-aligned (``l``) header (``H``) cell with content
    “``One``”, and two centered (``c``) header (``H``) cells with
    respective content “``Two``” and “``Three``”.

  You can also override the style and/or location for individual cells
  in the tabular data by wrapping that cell's content in an explicit
  ``\cell`` call.  Styles are merged with any styles specified in the
  ``\celldata`` call.  For instance, ``\celldata<H>{A & B &
  \cell<green>[\merge{+2}]{C}}`` will generate a row with a header
  cell ``A`` in the first column, a header cell ``B`` in the second
  column, and a green-background header cell ``C`` spanning the third
  and fouth columns.

- ``\rownames{...}`` and ``\colnames{...}`` give names to the rows and
  columns (a comma-separated list, the *k*-th entry naming row or column
  *k*), which can then be used wherever a row or column number can.

*Cell styles:*

- ``H`` (or ``head{column}``) — this cell is a column header.  It will be
  typeset in a more prominent form (e.g., boldface with a light bottom
  border);

- ``rH`` (or ``head{row}``) — this cell is a row header.  It will be typeset
  more prominently (e.g., boldface);

- ``l``, ``c``, ``r`` (or ``align{left}``, ``align{center}``,
  ``align{right}``) — align cell contents ``l``\ eft, ``c``\ entered or
  ``r``\ ight;

- ``lvert``, ``rvert`` (or ``rule{left}``, ``rule{right}``; also
  ``rule{above}``, ``rule{below}``) — add a thin border on that side of the
  cell;

- ``green``, ``blue``, ``yellow``, ``red`` — apply a background
  color to the cell to emphasize it in some way.


Quotations, verbatim content, and more
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(``quote``, ``verbatim``, ``theorems``, ``annotations``)

- *Quotations:* ``\begin{quote} ... \end{quote}`` holds quotation sections:
  ``\text{...}`` (a quoted passage), ``\lines{...}`` (lines set as written,
  each ended by ``\\``), ``\attributed{...}`` (the author or source) and
  ``\block{...}`` (paragraphs, lists, formulas).  Text written directly in a
  ``quote`` is an error.  ``\begin{blockquote} ... \end{blockquote}`` holds
  plain paragraphs, and ``\begin{address} ... \end{address}`` lines.

  .. code:: latex

    \begin{quote}
      \text{To be or not to be.}
      \attributed{Shakespeare}
    \end{quote}

- *Verbatim content:* ``\verbcode+...+`` (code), ``\verbtext+...+`` (text) and
  ``\verba+...+`` (an identifier) take their content exactly as written,
  between two copies of any delimiter character (or a pair of braces,
  brackets, angle brackets or parentheses).  ``\verbcode`` and ``\verba``
  take an optional ``[lang]`` argument first, the language of the content
  (``\verbcode[python]+f(x)+``), so a ``[`` right after them opens that
  argument: brackets delimit their content only after a ``[lang]``
  (``\verbcode[python][w]``), while ``\verbtext[w]`` reads ``w`` directly.
  The environments ``\begin{verbatimtext} ... \end{verbatimtext}`` and
  ``\begin{verbatimcode}[python] ... \end{verbatimcode}`` (a block of code) do
  the same for longer content.

- *Theorems:* the environments ``theorem``, ``proposition``, ``lemma``,
  ``corollary``, ``conjecture``, ``definition``, ``remark`` (numbered in one
  sequence, with an optional title in brackets and labels such as
  ``thm:...``) and ``proof``.

- *Annotations:* a zoo can declare reviewers, each with a command of their own
  for highlights and remarks (the ``annotations`` settings); there are none
  by default.
