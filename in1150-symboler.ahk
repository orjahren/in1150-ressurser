#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

::\forall::
Send, {U+2200}
return

::\exists::
Send, {U+2203}
return

::\imp::
Send, {U+2192}
return

::\neg::
Send, {U+00AC}
return

::\lor::
Send, {U+2228}
return

::\land::
Send, {U+2227}
return

::\union::
Send, {U+222A}
return

::\snitt::
Send, {U+2229}
return

::\models::
Send, {U+22A8}
return

::\in::
Send, {U+03F5}
return

::\subseteq::
Send, {U+2286}
return

::\N::
Send, {U+2115}
return

::\Lambda::
Send, {U+039B}
return

::\llambda::
Send, {U+03BB}
return


^j::
Send, 1150-scriptet kjører
return