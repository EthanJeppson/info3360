# PREIshare team orientation notes

Author: Ethan Jeppson
Date: 2026-09-18

## 0. Team repository of record

- **Team repo (upstream):** https://github.com/EdTechForLearning/PREIShare-org-repo
- **My fork (created in Step 3):** https://github.com/EthanJeppson/PREIShare-org-repo
- I contribute by forking this repo and opening pull requests from my fork. I do not push to the team repo directly.

## 1. Product mission (my words)

PREIshare helps people make better real-estate decisions by turning property
and market data into clear intelligence they can actually use.

The engineering team ships that product as a shared web app. Careful
collaboration matters because the next person should receive a complete,
immediately usable copy of the work—not a pile of parts they have to rebuild.
That is the same idea as using a Share button in a school slideshow app:
the whole project arrives ready to open. Sending a zip, a build recipe, or
“here are the files, you figure it out” fails that test.

My job as a new contributor is to join that sharing loop safely. I am not
rewriting the product on day one.

## 2. Everyday collaboration → engineering workflow

The picture I already understand is this: save or share the whole project so
someone else can keep working without rebuilding any finished part. That
carbon copy has to be available from inside the team’s tools—like a built-in
Share shortcut—not as a zip or a set of instructions.

| Everyday picture | PREIshare engineering parallel |
| --- | --- |
| The class slideshow everyone presents from | The shared default branch on the team repository |
| My own copy of the slideshow before I hit Share | My separate line of work with a small change |
| Notes about what I changed in this draft | Short written history of each save |
| Asking a classmate to check the slides before we present | Opening a pull request so a teammate can review |
| They approve, then the class copy updates | Review passes, then the change can join the shared project |

## 3. Actors in a pull-request workflow

- **Contributor (me):** picks a tiny safe change, works on my own copy, writes
  down what I did, and answers review questions.
- **Reviewer (teammate or a simulated reviewer):** checks that the change is
  correct, small enough to understand, and clearly described before it becomes
  official.
- **Shared repository:** the team’s source of truth on GitHub. Even if a tool
  would let me edit it directly, the team process is: draft first, review
  second, then accept.
- **Automation (later):** extra checks may run on the pull request. If those
  checks fail, I treat that as a real blocker, not background noise.

## 4. First-PR definition of done (beginner-safe)

My first reviewed pull request is done only when all of the following are true:

1. **Scoped:** The change is intentionally small (for example these onboarding
   notes)—not a multi-feature rewrite.
2. **Isolated:** I worked on a separate line of work. I did not edit the shared
   default copy directly.
3. **Described:** The pull request says why the change exists, what files
   changed, and how a reviewer can check it.
4. **Reviewable:** A teammate can understand the difference without a meeting.
   Notes capture any decisions or follow-ups.
5. **Verified:** I re-read my own change and fixed obvious mistakes before I
   asked for review.
6. **Immediately usable:** After review, the shared project is still a complete
   copy someone else can open and use. I did not leave behind missing pieces,
   secret instructions, or a “zip it yourself” gap.
7. **Aligned:** The change matches team conventions I will learn in later
   steps (repo map, AI rules, and best practices).

## 5. Out of scope for the first PR

- Large rewrites, dependency upgrades, or database structure changes
- Secrets, production passwords, or real customer data
- Extra unrelated edits that make the review bigger than it needs to be
- Shipping a zip, a rebuild guide, or any handoff that is not immediately usable

## 6. How I will use AI on this team

I will prompt agents in small cycles: understand → plan → prompt → review → refine.

I will not paste secrets into agents. I will not accept agent output I cannot
explain to a teammate in plain speech.

On this file, I used an assistant as a writing coach. I supplied the mission
thinking and the Share-button / no-zip picture. The assistant helped structure
the notes and challenged me to separate two ideas:

1. **What PREIshare is for** (real-estate intelligence)
2. **How this team shares work** (a complete, immediately usable copy, like a
   Share button)

Orientation is complete when I can tell a human those two things, who is in
the pull-request loop, and what “first PR done” means—before I configure tools
or write application code.
