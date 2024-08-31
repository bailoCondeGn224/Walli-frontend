export const filterData = (data: any, value: any) => {
  const dataFilted = data.filter((datas: any) =>
    datas.typeActivite.toLowerCase().includes(value.toLowerCase())
  );

  return dataFilted;
};

async function getPosition(): Promise<{
  latitude: number;
  longitude: number;
  altitude: number | null;
}> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const altitude = position.coords.altitude || null;
        resolve({ latitude, longitude, altitude });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            "Vous avez refusé de partager votre position. Voulez-vous revenir à la page principale ?"
          );
          window.location.href = "/";
        } else {
          reject(error);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}

export async function getPositionWithUserConfirmation(): Promise<{
  latitude: number;
  longitude: number;
  altitude: number | null;
}> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const altitude = position.coords.altitude || null;
        resolve({ latitude, longitude, altitude });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}

getPositionWithUserConfirmation()
  .then((position) => {
    console.log("Position trouvée:", position);
  })
  .catch((error) => {
    if (error.code === error.PERMISSION_DENIED) {
      alert(
        "Vous avez refusé de partager votre position. Voulez-vous revenir à la page principale ?"
      );
      window.location.href = "/";
    } else {
      console.error("Erreur lors de la recherche de la position:", error);
    }
  });

getPosition()
  .then((position) => {
    console.log("Position trouvée:", position);
    // Enregistrer ici les coordonnées
  })
  .catch((error) => {
    if (error.code === error.PERMISSION_DENIED) {
      alert(
        "Vous avez refusé de partager votre position. Voulez-vous revenir à la page principale ?"
      );
      window.location.href = "/";
    } else {
      console.error("Erreur lors de la recherche de la position:", error);
    }
  });
