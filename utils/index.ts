export function getLocalTimeLosAngeles(): string {
  const date = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  } as Intl.DateTimeFormatOptions;

  const timeZone = "America/Los_Angeles";
  const losAngelesTime = date.toLocaleTimeString("en-US", {
    ...options,
    timeZone,
  });

  return losAngelesTime;
}

export function emailRedirect(): void {
  const emailAddress = "hey.spinnin@gmail.com";
  const subject = "🤙 I am looking for an agency. Let's talk!";

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = mailtoUrl;
}
