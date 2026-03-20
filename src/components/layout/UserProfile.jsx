/**
 * UserProfile — Placeholder component for user profile management.
 * @param {boolean} isDark - Current visual theme state.
 * @param {function} onEdit - Callback trigger for profile editing.
 */
export function UserProfile({ isDark, onEdit }) {
  return (
    <div style={styles.container}>
      <button style={styles.button}>Profile</button>
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  container: {
    padding: "8px",
  },
  button: {
    cursor: "pointer",
  },
};
