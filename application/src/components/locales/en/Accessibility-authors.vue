<script setup>
import OrganizerItem from '@/components/OrganizerItem.vue'
</script>

<template>
    <p>
        We are committed to providing an inclusive environment and maximizing the experience for everyone. As the
        primary producers of information, we encourage all participants to follow these recommendations.
    </p>
    <p class="acc-wcag-note">These recommendations are informed by WCAG 2.2 (W3C, 2023), ACM SIGACCESS accessibility guidance, and current best practices for accessible academic communication.</p>

    <!-- Language recommendations -->
    <h2 id="language-recommendations">Language Recommendations</h2>

    <p>
        Effective communication of research ideas is a crucial aspect of our conference. We invite you to read
        the following guides published by <a class="uline" href="https://www.sigaccess.org/">ACM SIGACCESS</a>:
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/"
            target="_blank" rel="noopener">Accessible Writing Guide</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/"
            target="_blank" rel="noopener">Accessible Presentation Guide</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/"
            target="_blank" rel="noopener">How to Describe Figures</a>
    </p>

    <p>
        The use of respectful and inclusive language is a professional responsibility. SIGACCESS acknowledges
        that preferences vary —between identity-first and person-first language— and recommends staying informed
        about current best practices. If you have questions about terminology, the <a class="uline"
            href="https://dl.acm.org/doi/10.1145/3517428.3544813"
            target="_blank" rel="noopener">study by Sharif et al. (ASSETS 2022)</a> provides empirical evidence
        on the preferences of people with disabilities.
    </p>

    <div class="acc-note">
        <strong>Recommendation:</strong> Avoid exclusive generic pronouns and phrasing. Use <em>"the authors"</em>
        or <em>"the presenter"</em> instead of gendered forms.
    </div>
    <!-- end Language recommendations -->

    <!-- Accessible document author recommendations -->
    <h2 id="accessible-document-author-recommendations">Accessible Documents</h2>

    <p>
        Accessible documents should be designed with perception and interaction alternatives in mind to ensure
        comprehension for all readers. Consult the official guide for your tool:
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d"
            target="_blank" rel="noopener">Microsoft Word</a>
        <a class="acc-tool-btn"
            href="https://support.google.com/docs/answer/6199477?hl=en"
            target="_blank" rel="noopener">Google Docs</a>
        <a class="acc-tool-btn"
            href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html"
            target="_blank" rel="noopener">Adobe Acrobat Pro</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
            target="_blank" rel="noopener">Accessible PDF Guide (SIGACCESS)</a>
        <a class="acc-tool-btn"
            href="https://wiki.documentfoundation.org/Accessibility/Creating_Accessible_LibreOffice_Files"
            target="_blank" rel="noopener">LibreOffice</a>
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use built-in heading styles:</strong> helps people who use screen readers to actively
            navigate the document line by line.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use meaningful link text:</strong> avoid phrases like "click here" or "more
            information". Link text should describe its destination.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Add alternative text to all images:</strong> it must be concise and describe the
            content or function of the image, not its decorative appearance.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Do not convey information through color alone:</strong> combine color with shapes,
            patterns, or labels. WCAG 2.2 requires a minimum contrast ratio of 4.5:1 for normal text
            and 3:1 for large text.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use tables only for tabular data:</strong> add alternative text, configure the header
            row, and include descriptive captions. Avoid using tables as a design structure.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use plain language:</strong> write short sentences, avoid unnecessary jargon, and
            prefer the active voice. This benefits all readers, including non-native speakers.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Add captions to figures and tables:</strong> this aids comprehension and navigation
            for all readers.</span>
        </li>
    </ul>

    <div class="row mt-3 g-3">
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">LaTeX</p>
                <p class="acc-tool-box-body">
                    Use the <code>hyperref</code> package and the <code>\pdftooltip</code> command (from the
                    <code>pdfcomment</code> package) to add alternative text to figures in PDF documents.
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">Apple Pages / Keynote</p>
                <p class="acc-tool-box-body">
                    Consult Apple's <a class="uline" href="https://support.apple.com/en-my/HT210563"
                        target="_blank" rel="noopener">accessibility guides</a> for Pages, Numbers, and Keynote.
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">Verify PDF</p>
                <p class="acc-tool-box-body">
                    In Acrobat Pro: File → Properties → Description. Verify that "Tagged PDF: Yes" appears in
                    the advanced properties.
                </p>
            </div>
        </div>
    </div>
    <!-- end Accessible document author recommendations -->

    <!-- Accessible slide author recommendations -->
    <h2 id="accessible-slide-author-recommendations">Accessible Presentations</h2>

    <p>
        Your presentations will be available as digital products of MexIHC 2026. Readers may use a screen
        reader, so slide accessibility is essential.
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/"
            target="_blank" rel="noopener">Accessible Presentation Guide (SIGACCESS)</a>
        <a class="acc-tool-btn"
            href="https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"
            target="_blank" rel="noopener">PowerPoint</a>
        <a class="acc-tool-btn"
            href="https://support.google.com/docs/answer/6199477?hl=en"
            target="_blank" rel="noopener">Google Slides</a>
        <a class="acc-tool-btn"
            href="https://support.apple.com/en-my/HT210563"
            target="_blank" rel="noopener">Keynote</a>
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Give every slide a unique title:</strong> use the built-in title box from the
            predefined slide template so screen readers announce the title of each slide.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Add alternative text to images or mark them as decorative:</strong> if an image
            adds no information, explicitly mark it as decorative so screen readers ignore it.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Do not use color alone to highlight key information:</strong> combine color with
            underline, bold, icons, or labels. Use the
            <a class="uline" href="https://webaim.org/resources/contrastchecker/"
                target="_blank" rel="noopener">WebAIM Contrast Checker</a>
            to verify contrast ratios.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Verify the reading order:</strong> in PowerPoint, use the Selection Pane to confirm
            that the order in which screen readers will read elements is correct.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Avoid tables whenever possible:</strong> if you use them, keep them simple —no merged
            or nested cells— and add row and column headers.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use fonts of at least 18–24 pt for body text:</strong> this improves readability for
            people with low vision and for those viewing the presentation in large rooms.</span>
        </li>
    </ul>
    <!-- end Accessible slide author recommendations -->

    <!-- Accessible video author recommendations -->
    <h2 id="accessible-video-author-recommendations">Videos with Subtitles</h2>

    <p>
        Subtitles benefit people with hearing disabilities, those in environments where they cannot play audio,
        and those who do not have Spanish or English as their native language.
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Generate and review automatic subtitles on YouTube:</strong> automatic transcriptions
            are a useful starting point, but must be edited to correct pronunciation errors, technical
            terminology, and punctuation. YouTube Studio → Subtitles → Edit.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Download the subtitle file (.SRT or .VTT):</strong> once reviewed, download the file
            from YouTube Studio to reuse it on other platforms (Vimeo, Zoom, e-learning platforms).</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Include descriptions of relevant non-verbal sounds:</strong> if there is applause,
            audio cues, or important scene changes, describe them in square brackets.
            e.g. [applause].</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Identify speakers:</strong> in videos with multiple participants, indicate who is
            speaking. e.g. [Moderator: …].</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Mind the reading speed:</strong> subtitles should not disappear before the average
            reader can finish them. A reference rate is a maximum of 17 characters per second.</span>
        </li>
    </ul>

    <div class="acc-note acc-note--tip">
        <strong>Tip:</strong> If you start your recording process by first writing the script or transcript,
        the subtitling process will be significantly faster and more accurate.
    </div>
    <!-- end Accessible video author recommendations -->

    <h2 class="my-4">Web Chair</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/mike.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url('/assets/img/people/mike.png');"></div>
                </template>
                <template #name>Miguel Ángel Rodríguez Ortiz</template>
                <template #institution>Universidad de Colima</template>
            </OrganizerItem>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 2.25rem;
    margin-bottom: 1rem;
}

.acc-wcag-note {
    font-size: 0.83rem;
    color: var(--mexihc-slate);
    border-left: 3px solid var(--mexihc-mist);
    padding-left: 0.85rem;
    margin-bottom: 0.5rem;
}

.acc-tool-btn {
    display: inline-block;
    padding: 0.22rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: var(--mexihc-indigo) !important;
    border: 1.5px solid var(--mexihc-indigo);
    border-radius: 6px;
    text-decoration: none !important;
    -webkit-text-fill-color: var(--mexihc-indigo);
    background-image: none !important;
    transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
    margin-right: 0.35rem;
    margin-bottom: 0.5rem;
}

.acc-tool-btn:hover,
.acc-tool-btn:focus-visible {
    background-color: var(--mexihc-indigo);
    color: var(--mexihc-white) !important;
    -webkit-text-fill-color: var(--mexihc-white) !important;
    background-image: none !important;
    text-decoration: none !important;
}

.acc-note {
    border-left: 3px solid var(--mexihc-magenta);
    background: rgba(135, 0, 88, 0.05);
    border-radius: 0 8px 8px 0;
    padding: 0.875rem 1.1rem;
    margin: 1.25rem 0;
    color: var(--mexihc-night);
    font-size: 0.92rem;
}

.acc-note--tip {
    border-left-color: var(--mexihc-indigo);
    background: rgba(73, 99, 137, 0.06);
}

.acc-checklist {
    list-style: none;
    padding-left: 0;
    margin-top: 0.75rem;
}

.acc-checklist li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid rgba(189, 184, 194, 0.35);
    font-size: 0.93rem;
}

.acc-checklist li:last-child {
    border-bottom: none;
}

.acc-check-box {
    flex-shrink: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    border: 2px solid var(--mexihc-indigo);
    border-radius: 3px;
    background: transparent;
}

.acc-tool-box {
    background: var(--mexihc-paper);
    border: 1px solid var(--mexihc-mist);
    border-top: 3px solid var(--mexihc-indigo);
    border-radius: 8px;
    padding: 1rem 1rem 0.875rem;
    height: 100%;
}

.acc-tool-box-title {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--mexihc-indigo);
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
}

.acc-tool-box-body {
    font-size: 0.82rem;
    color: var(--mexihc-slate);
    margin: 0;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
}

code {
    font-size: 0.8em;
    color: var(--mexihc-magenta);
    background: rgba(135, 0, 88, 0.07);
    padding: 0.1em 0.35em;
    border-radius: 4px;
}
</style>
