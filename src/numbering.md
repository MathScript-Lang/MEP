# "Numbering"

MEPs need to be organized, and what better than a numbering system?

## MEP types

MEPs exist in two types:

- Regular MEPs (or just MEPs)
- Meta-MEPs

While a regular MEP rules the language and its ecosystem, Meta-MEPs like this very
one rule how MEPs are written and organized.

## Meta-MEPs

A Meta-MEP is designated by its name. This name, preferably one-word, is displayed
within quotation marks ("double quotes"), and represent the scope, the purpose, of
said Meta-MEP.

Example:

```text:no-line-numbers
Meta-MEP "Numbering"
```

## Regular MEPs

Regular a numerical order, MEP 0 and MEP 1 being reserved for the core language's
specifications. A draft for a new MEP would so be numbered the number following
the highest number in the drafts.

Example:

```text:no-line-numbers
MEP 3
```

## Revisions

To mention a specific revision, a revision number is added to the MEP number, separated
by a dash. The first revision is considered "1".

Mentioning a MEP without a revision number would assimilate to mentioning the latest
revision.

Example:

```text:no-line-numbers
MEP 5-2
Meta-MEP "Writing"-3
```

## Drafts

If a MEP is a draft, a "D" is added as a suffix to the MEP number. If a revision
is a draft of an already accepted MEP, then a "D" suffix is added to the revision
number.

Example:

```text:no-line-numbers
MEP 5D
MEP 5-2D
MEP 5D-2

Meta-MEP "Writing"D
Meta-MEP "Writing"D-3
Meta-MEP "Writing"-3D
```

## Mentioning a MEP

When mentioning a MEP, it has to be done such that it links to the MEP in a specific
way.

For Meta-MEPs:

::: v-pre
<div class="language-md" data-ext="md">
<pre><code>Meta-MEP ["<em>name</em>"](<em>link</em>)</code></pre>
</div>
:::

For regular MEPs:

::: v-pre
<div class="language-md" data-ext="md">
<pre><code>[MEP <em>number</em>](<em>link</em>)</code></pre>
</div>
:::
