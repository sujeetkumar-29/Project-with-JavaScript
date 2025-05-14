// Select the textarea and output elements
const textarea = document.getElementById('Word');
const characterCount = document.querySelector('.character');
const wordCount = document.querySelector('.word');
const sentenceCount = document.querySelector('.sentence');
const paragraphCount = document.querySelector('.paragraph');

// Function to count words, characters, sentences, and paragraphs
function updateCounts() {
    const text = textarea.value;

    // Count characters
    const characters = text.length;

    // Count words (split by spaces and filter out empty strings)
    const words = text.trim().split(/\s+/).filter(word => word !== '').length;

    // Count sentences (split by '.', '!', or '?')
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;

    // Count paragraphs (split by new lines)
    const paragraphs = text.split(/\n/).filter(paragraph => paragraph.trim() !== '').length;

    // Update the output elements
    characterCount.textContent = `Characters: ${characters}`;
    wordCount.textContent = `Words: ${words}`;
    sentenceCount.textContent = `Sentences: ${sentences}`;
    paragraphCount.textContent = `Paragraphs: ${paragraphs}`;
}

// Add event listener to update counts on input
textarea.addEventListener('input', updateCounts);