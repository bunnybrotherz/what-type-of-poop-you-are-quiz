import { useMemo } from "react";

function ResultCard({ archetype, onRestart }) {
  const shareText = useMemo(() => {
    return `I got ${archetype.name} in the "Which Poop Attachment Style Are You?" quiz. Take it and expose your emotional plumbing.`;
  }, [archetype.name]);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareTo = (platform) => {
    const urls = {
      x: `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const copyResult = async () => {
    const text = `${shareText} ${currentUrl}`;

    try {
      await navigator.clipboard.writeText(text);
      window.alert("Result copied to clipboard.");
    } catch {
      window.alert("Clipboard access failed. Copy manually from your address bar.");
    }
  };

  return (
    <section className="result-wrap" aria-live="polite">
      <div className="result-card">
        <p className="result-label">Your archetype</p>
        <h2>{archetype.name}</h2>
        <p>{archetype.description}</p>
      </div>

      <div className="share-row">
        <button type="button" className="share-btn" onClick={() => shareTo("x")}>
          Share on X
        </button>
        <button type="button" className="share-btn" onClick={() => shareTo("facebook")}>
          Share on Facebook
        </button>
        <button type="button" className="share-btn" onClick={() => shareTo("linkedin")}>
          Share on LinkedIn
        </button>
        <button type="button" className="share-btn" onClick={copyResult}>
          Copy Result Link
        </button>
      </div>

      <button type="button" className="restart-btn" onClick={onRestart}>
        Retake Quiz
      </button>
    </section>
  );
}

export default ResultCard;
