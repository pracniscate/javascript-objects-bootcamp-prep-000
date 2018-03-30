var playlist = new Object({ [Slowdive]: "Alison", [My Bloody Valentine]: "Sometimes" });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.Slowdive = "Alison";
  playlist['My Bloody Valentine'] = "Sometimes";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  
}