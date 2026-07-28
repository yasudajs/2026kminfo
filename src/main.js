document.addEventListener('DOMContentLoaded', () => {
  // 最終更新日時の設定
  const lastUpdatedEl = document.getElementById('last-updated');
  if (lastUpdatedEl) {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    lastUpdatedEl.textContent = `最終更新: ${year}年${month}月${date}日 ${hours}:${minutes}`;
  }
});
