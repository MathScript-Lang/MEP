# Get Started

## What is a MEP?

*MathScript Enhancement Proposal*s (MEPs) are the living specifications of the MathScript
programming language and its ecosystem. They are drafted by community members and
reviewed and accepted by the community.

## Numbering system

::: note

For a complete documentation of the numbering system, see the Meta-MEP ["Numbering"](numbering.md).

:::

MEPs are classed in two type: regular MEPs, and Meta-MEPs. Whereas regular MEPs define
the language, its features and its ecosystem, Meta-MEPs define the way regular MEPs
should and do work.

Meta-MEPs are referenced by a (preferably single-word) name in quotation marks, such
as "Writing", describing the intent of the Meta-MEP.

Regular MEPs are numbered, starting at 0 (MEP 0 being a special MEP).

MEPs, regular and Meta-MEPs, can be edited after publishing, and when wanting to
mention a specific revision, a revision number is added to the MEP number, separated
by a dash. The first revision is considered "-1". The third revision of MEP 5 would
be "MEP 5-3".

As MEPs are at first proposals, MEPs that are currently in draft, and not accepted
yet are designated by a "D" after the MEP number. This makes the third revision of
the draft for a new MEP 9 being "MEP 9D-3". Drafts for new revisions of already
accepted MEPs are designated by having the "D" after the revision number, instead
of after the MEP number, like "MEP 5-3D".

## Writing a MEP

::: note

For a complete documentation of how to write MEPs, see the Meta-MEP ["Writing"](writing.md).

:::

Writing a MEP has multiple aspects. There's the technical aspect, such as filename
conventions and other organizational conventions, but also and mainly the editorial
aspect.

As MEPs are firstly proposals, when you start writing a MEP, you firstly put it into
the [`drafts/`](https://github.com/MathScript-Lang/MEP/tree/main/docs/drafts/) directory.
In this directory, people can contribute with you on the writing of this MEP. If
you don't want people to contribute, even though not recommended, your draft can
live in your personal fork.

Once your draft is complete, you can submit it for review in the
[*Drafts for review*](https://github.com/MathScript-Lang/MEP/discussions/categories/drafts-for-review)
discussion category.
When it will be accepted, you will be notified and the MEP will be moved into the
main directory. If it doesn't get accepted, you will be notified of the reason,
and it will be left in the drafts directory except for some exceptions for which
it may get deleted.
